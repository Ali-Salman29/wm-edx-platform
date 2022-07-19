# Generated by Django 2.2.24 on 2022-06-16 15:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('meta_translations', '0009_auto_20220608_0908'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='translationversion',
            unique_together={('block_id', 'date')},
        ),
        migrations.CreateModel(
            name='MetaApiButtonConfiguration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('change_date', models.DateTimeField(auto_now_add=True, verbose_name='Change date')),
                ('enabled', models.BooleanField(default=False, verbose_name='Enabled')),
                ('staff_show_api_buttons', models.BooleanField(default=False)),
                ('normal_users_show_api_buttons', models.BooleanField(default=False)),
                ('changed_by', models.ForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='Changed by')),
            ],
            options={
                'ordering': ('-change_date',),
                'abstract': False,
            },
        ),
    ]

# Generated by Django 2.2.24 on 2022-05-18 09:19

from django.db import migrations
import jsonfield.encoder
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('meta_translations', '0005_wikitranslation_approved'),
    ]

    operations = [
        migrations.AddField(
            model_name='courseblockdata',
            name='parsed_keys',
            field=jsonfield.fields.JSONField(default=None, dump_kwargs={'cls': jsonfield.encoder.JSONEncoder, 'separators': (',', ':')}, load_kwargs={}),
        ),
    ]
